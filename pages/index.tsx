import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Slider } from "@heroui/slider";
import { useEffect, useState, useCallback } from "react";
import { useDisclosure } from "@heroui/modal";
import { Snippet } from "@heroui/snippet";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { CheckBoxTypeOfPassword } from "@/components/CheckBox";
import { generateRandomString } from "@/helpers";
import { options } from "@/components/CheckBox/types";
import { PasswordCopyModal } from "@/components/Modal";

export default function IndexPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [passwordOptions, setPasswordOptions] = useState<string[]>([
    ...options
      .map((option) => option.value)
      .toString()
      .split(","),
  ]);

  const generatePassword = useCallback(() => {
    const pass = generateRandomString(passwordLength, passwordOptions);

    setPassword(pass);
  }, [passwordLength, passwordOptions]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password || "");
    onOpen();
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 h-full">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Gerador de &nbsp;</span>
          <span className={title({ color: "violet" })}>
            Senhas Aleatórias&nbsp;
          </span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Crie senhas fortes e seguras para proteger suas contas online.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <Card className="max-w-[800px] w-full p-4">
          <Snippet
            classNames={{
              base: "text-center d-flex justify-center items-center",
              pre: " text-ellipsis truncate",
            }}
            color="secondary"
            size="lg"
            symbol="🔑"
            variant="shadow"
            onCopy={() => copyPassword()}
          >
            {password}
          </Snippet>

          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <CheckBoxTypeOfPassword
              options={options}
              passwordOptions={passwordOptions}
              setPasswordOptions={setPasswordOptions}
            />
            <Slider
              defaultChecked
              className="max-w-md m-auto"
              defaultValue={passwordLength}
              getValue={(pass) => `${pass} `}
              label="Tamanho da senha"
              maxValue={60}
              minValue={1}
              size="md"
              onChange={(value) => setPasswordLength(value as number)}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2" />
          <CardFooter>
            <div className="flex gap-4 items-center m-auto">
              <Button
                color="primary"
                variant="shadow"
                onPress={generatePassword}
              >
                gerar senha
              </Button>
              <Button color="secondary" variant="shadow" onPress={copyPassword}>
                copiar senha
              </Button>
            </div>
          </CardFooter>
        </Card>
        <PasswordCopyModal
          isOpen={isOpen}
          password={password}
          onClose={onClose}
        />
      </section>
    </DefaultLayout>
  );
}
