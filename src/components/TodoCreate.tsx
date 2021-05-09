import React, { useState } from "react";
import TodoModal from "./TodoModal";
import Button from "./Button";

function TodoCreate() {
  const [modalOpen, setModalOpen] = useState(false);

  const onCancel = () => {
    setModalOpen(false);
  };

  const onOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <TodoModal
        visible={modalOpen}
        onCancel={onCancel}
        templateTitle={"투-두 작성하기"}
        modalTitle={"Write"}
        modalButton={"등록하기"}
      />
      <Button onOff={onOpen} isClose={false} />
    </>
  );
}

export default TodoCreate;
