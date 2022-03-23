import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import './BottomSheetBase.css';

function BottomSheetBase(props) {
  const [open, setOpen] = useState(false);
  const { btnname, header, body } = props;

  return (
    <>
      <button type="button" onClick={() => setOpen(!open)}>
        {btnname}
      </button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        header={<p className="sheetHeader">{header}</p>}
      >
        {body}
      </BottomSheet>
    </>
  );
}

export default BottomSheetBase;
