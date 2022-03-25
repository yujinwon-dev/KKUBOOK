import React from 'react';
import tw, { styled } from 'twin.macro';
import days from '../../utils/days';
import Svg from '../common/Svg';

const StatisticBox = styled.div`
  ${tw`px-page-x`}
  background-color: #8DCD84;
  .date {
    text-align: center;
  }
`;

const Dl = styled.dl`
  ${tw`flex justify-around py-5`}
`;

const Box = styled.div`
  ${tw`flex flex-col items-center bg-white px-3 py-2`}
  border: 0.1px solid #a1a1a1;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #00000040;

  .desc-data {
    display: flex;
    justify-content: space-between;
    margin-top: 0.25rem;

    dt {
      margin-right: 0.75rem;
    }
  }
`;

const today = new Date();
const thisYear = today.getFullYear();
const thisMonth = today.getMonth() + 1;

function Statistics() {
  return (
    <StatisticBox>
      <p className="date">{thisYear}</p>
      <p className="date">{thisMonth}</p>
      <Dl>
        <Box>
          <Svg stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </Svg>
          <div className="desc-data">
            <dt>책</dt>
            <dd>
              <strong>4</strong>권
            </dd>
          </div>
        </Box>
        <Box>
          <Svg stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </Svg>
          <div className="desc-data">
            <dt>독서일</dt>
            <dd>
              <strong>6</strong>일 / <strong>{days[thisMonth]}</strong>일
            </dd>
          </div>
        </Box>
      </Dl>
      <Box>
        <p>장르별</p>
        <p>그래프</p>
        <p>정보...</p>
      </Box>
    </StatisticBox>
  );
}

export default Statistics;
