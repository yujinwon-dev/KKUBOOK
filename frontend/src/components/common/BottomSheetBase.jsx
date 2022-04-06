import React, { useState, useCallback } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import styled from 'styled-components';
import useStore from '../../stores/bottomSheet';

const StyledBottomSheet = styled(BottomSheet)`
  [data-rsbs-overlay],
  [data-rsbs-backdrop] {
    max-width: 500px;
    margin: 0px auto;
  }
  ,
  [data-rsbs-scroll] {
    -webkit-overflow-scrolling: auto;
  }
`;

function BottomSheetBase() {
  const open = useStore(useCallback(state => state.open));
  const { onDismiss, header, Component } = useStore(
    useCallback(state => state, [open]),
  );

  return (
    <StyledBottomSheet
      open={open}
      onDismiss={onDismiss}
      header={<p className="sheetHeader">{header}</p>}
    >
      {Component && <Component />}
    </StyledBottomSheet>
  );
}

export default BottomSheetBase;
