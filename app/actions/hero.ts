"use server";

import { prisma } from "@/lib/prisma";
import { storage } from "@/lib/storage";
import { revalidatePath } from "next/cache";

export async function getHeroSlides() {
  try {
    return await prisma.heroSlide.findMany({
      orderBy: {
        order: "asc",
      },
    });
  } catch (error) {
    console.error("Error fetching hero slides:", error);
    return [];
  }
}

export async function createHeroSlide(formData: FormData) {
  try {
    const file = formData.get("image") as File;
    if (!file) throw new Error("No image provided");

    const imageUrl = await storage.upload(file, "hero");

    const slide = await prisma.heroSlide.create({
      data: {
        imageUrl,
        order: 0,
      },
    });

    revalidatePath("/");
    revalidatePath("/admin/hero");
    return { success: true, slide };
  } catch (error) {
    console.error("Error creating hero slide:", error);
    return { success: false, error: (error as Error).message };
  }
}

export async function updateHeroSlide(id: string, data: { order?: number, title?: string, subtitle?: string, buttonText?: string, buttonLink?: string }) {
  try {
    const slide = await prisma.heroSlide.update({
      where: { id },
      data,
    });

    revalidatePath("/");
    revalidatePath("/admin/hero");
    return { success: true, slide };
  } catch (error) {
    console.error("Error updating hero slide:", error);
    return { success: false, error: (error as Error).message };
  }
}

export async function deleteHeroSlide(id: string) {
  try {
    const slide = await prisma.heroSlide.findUnique({
      where: { id },
    });

    if (slide) {
      await storage.delete("hero", slide.imageUrl);
      await prisma.heroSlide.delete({
        where: { id },
      });
    }

    revalidatePath("/");
    revalidatePath("/admin/hero");
    return { success: true };
  } catch (error) {
    console.error("Error deleting hero slide:", error);
    return { success: false, error: (error as Error).message };
  }
}

export async function uploadImage(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file provided");
    const url = await storage.upload(file, "hero");
    return { success: true, url };
  } catch (error) {
    console.error("Error uploading image:", error);
    return { success: false, error: (error as Error).message };
  }
}
