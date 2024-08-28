import { useAtom } from "jotai";
import { ReactNode, useCallback } from "react";

import { delay } from "../lib/utils";
import { modalsState } from "../states/modal";

export type Modals = Map<string, ModalProps>;

export type ModalProps = {
  id: string;
  createdAt?: number;
  className?: string;
  component?: () => JSX.Element;

  // Antd Modal props
  open?: boolean;
  onOpenChange?: () => void;
  centered?: boolean;
  title?: ReactNode;
  width?: number | string;
  footer?: ReactNode;
  maskClosable?: boolean;
  afterClose?: () => void;
  onCancel?: () => void;
};

let tmpModals: Modals;

export const DELAY = 300; // modal animation delay

export default function useModal() {
  const [modals, setModals] = useAtom(modalsState);
  tmpModals = modals;

  // 가장 최근의 modal id 조회
  const getRecentModalId = useCallback(() => {
    const hashMap: Map<string, ModalProps> = new Map(tmpModals);
    const arr = Array.from(hashMap.values()).sort(
      (a: ModalProps, b: ModalProps) => {
        const createdAtA = a.createdAt || 0;
        const createdAtB = b.createdAt || 0;
        return createdAtB - createdAtA;
      }
    );
    if (arr.length === 0) return null;
    return arr[0].id;
  }, []);

  // 모달 open
  const openModal = useCallback(
    (props: ModalProps) => {
      const hashMapA: Map<string, ModalProps> = new Map(tmpModals);
      // opened 모달의 경우 return
      // props 속성 추가의 경우 modal provider에서 props를 명시적으로 추가해야 함
      if (props.id && hashMapA.has(props.id)) return;
      const id = Math.random().toString(36).substring(2);
      props.id = props.id || id;
      props.open = true;
      props.createdAt = new Date().getTime();
      props.centered = props.centered || true;
      props.footer = props.footer || null;
      props.width = props.width || 520;
      hashMapA.set(props.id, props);
      setModals(hashMapA);
    },
    [setModals]
  );

  // 모달 close
  const closeModal = useCallback(
    async (id?: string) => {
      const _id = id || getRecentModalId();
      if (!_id) return;
      const newMap = new Map(tmpModals);
      const props = newMap.get(_id);
      if (!props) return;
      props.open = false;
      newMap.set(_id, props);
      setModals(newMap);
      await delay(DELAY);
      newMap.delete(_id);
      return setModals(new Map(newMap));
    },
    [setModals, getRecentModalId]
  );

  // 모달 change
  const changeModal = useCallback(
    async (props: ModalProps) => {
      await closeModal();
      await delay(50);
      openModal(props);
    },
    [openModal, closeModal]
  );

  return {
    modals,
    openModal,
    closeModal,
    changeModal,
  };
}
