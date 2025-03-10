import { FC } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";

type ModalPasswordProps = {
  isOpen: boolean;
  onClose: () => void;
  password: string;
};

export const PasswordCopyModal: FC<ModalPasswordProps> = ({
  isOpen,
  onClose,
  password,
}) => {
  return (
    <>
      <Modal
        hideCloseButton
        backdrop={"blur"}
        isOpen={isOpen}
        placement="center"
        onClose={onClose}
      >
        <ModalContent className="overflow-hidden">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Senha Gerada
                <span className="text-purple-800 text-2xl break-words overflow-hidden ">
                  {password}
                </span>
              </ModalHeader>
              <ModalBody>Senha copiada para a área de transferência!</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
