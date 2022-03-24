import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import styled from 'styled-components';

const StyledBottomSheet = styled(BottomSheet)`
  [data-rsbs-overlay],
  [data-rsbs-backdrop] {
    max-width: 500px;
    margin: 0px auto;
  }
`;

function BottomSheetBase(props) {
  const [open, setOpen] = useState(false);
  const { btnname, header, body, onClickHandler } = props;
  const basicClickHandler = () => setOpen(!open);
  const customClickHandler = () => onClickHandler(basicClickHandler);

  return (
    <>
      <button
        type="button"
        onClick={onClickHandler ? customClickHandler : basicClickHandler}
      >
        {btnname}
      </button>
      <StyledBottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        header={<p className="sheetHeader">{header}</p>}
      >
        {body}
      </StyledBottomSheet>
    </>
  );
}

export default BottomSheetBase;
