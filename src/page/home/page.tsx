"use client";

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { useEffect, useState } from "react";
import Image from "next/image";
import { addToast } from "@heroui/toast";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button as ButtonShadcn } from "@/components/ui/button";
import { Button } from "@/components/custom-hero-ui/button";
import { DetailInformationResponse } from "@/api";
import { getDetailInformationApi } from "@/lib/api-client";

export default function HomePage() {
  // State to hold the detail information
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState(true);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [removingId, setRemovingId] = useState<string | null>(null);

  const [detailInformation, setDetailInformation] = useState<
    DetailInformationResponse[]
  >([]);

  useEffect(() => {
    getAllDetailInformation();
  }, []);

  const getAllDetailInformation = async () => {
    try {
      const detailInformation = getDetailInformationApi();
      const result =
        await detailInformation.detailInformationControllerFindAll();

      if (result) {
        setDetailInformation(result.data.data);
      }
    } catch (error) {
      throw new Error("Failed to fetch detail information: " + error);
    }
  };

  const handleSubmit = async () => {
    try {
      const detailInformation = getDetailInformationApi();

      await detailInformation.detailInformationControllerCreate({
        fullName: fullName,
        avatarUrl: avatarUrl,
        dateOfBirth: dateOfBirth,
        gender: gender,
        thumbnailUrl: thumbnailUrl
      });

      addToast({
        title: "Creating detail information...",
        description: "Please wait while we create the detail information.",
        timeout: 3000,
        color: "success"
      });

      await getAllDetailInformation();
    } catch (error) {
      throw new Error("Failed to create detail information: " + error);
    }
  };

  const handleRemove = async (id: string) => {
    setRemovingId(id);
    try {
      const detailInformation = getDetailInformationApi();

      await detailInformation.detailInformationControllerRemove(id);
      await getAllDetailInformation();
    } catch (error) {
      throw new Error("Failed to delete detail information: " + error);
    } finally {
      setRemovingId(null);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl justify-center text-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow"
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
      <ButtonShadcn>ABSCSAPOJWD</ButtonShadcn>
      <Button isLoading>asdwwwwe</Button>

      <div className="mt-8 flex w-full max-w-2xl flex-col gap-4">
        <input
          required
          className="rounded border px-3 py-2"
          name="fullName"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          required
          className="rounded border px-3 py-2"
          name="avatarUrl"
          placeholder="Avatar URL"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
        <input
          required
          className="rounded border px-3 py-2"
          name="dateOfBirth"
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        <select
          required
          className="rounded border px-3 py-2"
          value={gender.toString()}
          onChange={(e) => setGender(e.target.value === "true")}
        >
          <option value="true">Male</option>
          <option value="false">Female</option>
        </select>
        <input
          required
          className="rounded border px-3 py-2"
          name="thumbnailUrl"
          placeholder="Thumbnail URL"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
        <Button onClick={handleSubmit}>Create Detail Information</Button>
      </div>

      <div className="mt-8 w-full overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Full Name</th>
              <th className="border px-4 py-2">Avatar</th>
              <th className="border px-4 py-2">Date of Birth</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Thumbnail</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {detailInformation && detailInformation.length > 0 ? (
              detailInformation.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.fullName}</td>
                  <td className="border px-4 py-2">
                    {item.avatarUrl && (
                      <Image
                        alt={item.fullName || "Avatar"}
                        className="mx-auto h-10 w-10 rounded-full"
                        height={40}
                        src={item.avatarUrl}
                        width={40}
                      />
                    )}
                  </td>
                  <td className="border px-4 py-2">{item.dateOfBirth}</td>
                  <td className="border px-4 py-2">
                    {item.gender ? "Male" : "Female"}
                  </td>
                  <td className="border px-4 py-2">
                    {item.thumbnailUrl && (
                      <Image
                        alt={item.fullName || "Thumbnail"}
                        className="mx-auto h-10 w-10 rounded"
                        height={40}
                        src={item.thumbnailUrl}
                        width={40}
                      />
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    <Button
                      color="danger"
                      isLoading={removingId === item.id}
                      size="sm"
                      onClick={() => handleRemove(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border px-4 py-2 text-center" colSpan={7}>
                  No detail information found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
