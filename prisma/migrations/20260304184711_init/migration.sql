/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Generation_types" AS ENUM ('ADS', 'THUMBNAIL');

-- CreateTable
CREATE TABLE "Input_images" (
    "id" TEXT NOT NULL,
    "user_ID" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "image_link" TEXT NOT NULL,
    "types" "Generation_types" NOT NULL DEFAULT 'THUMBNAIL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Input_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "output_images" (
    "id" TEXT NOT NULL,
    "Input_image_id" TEXT NOT NULL,
    "Generated_images" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "types" "Generation_types" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "output_images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");

-- AddForeignKey
ALTER TABLE "Input_images" ADD CONSTRAINT "Input_images_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Input_images" ADD CONSTRAINT "Input_images_user_name_fkey" FOREIGN KEY ("user_name") REFERENCES "user"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "output_images" ADD CONSTRAINT "output_images_Input_image_id_fkey" FOREIGN KEY ("Input_image_id") REFERENCES "Input_images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
