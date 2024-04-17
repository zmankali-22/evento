import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function getEvents(city: string, page = 1) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  return { events, totalCount };
}

export async function getEvent(slug: string) {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );

  // const data: EventoEvent  = await response.json();

  const data = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
}