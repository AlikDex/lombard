"use server";
import { Instruments } from "@/components/pages/Instruments";
import { getConfig } from "@/utils/config/getConfig";
import { Metadata, ResolvingMetadata } from "next";
import "reset-css/sass/_reset.scss";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const config = await getConfig();
  return {
    title: config.texts.pages.equipment.title,
    description: config.texts.pages.equipment.description,
  };
}

export default async function Page({ params, searchParams }: Props) {
  return (
    <main>
      <Instruments />
    </main>
  );
}
