import tw, { styled } from 'twin.macro';
import ProgressBar from '../common/ProgressBar';

const StyledPeriod = styled.div`
  ${tw`bg-light-gray`}
  padding: 8px 2px;
  font-size: 12px;
  border-radius: 5px;

  p {
    display: inline-block;
  }

  span {
    margin: 5px;
    font-weight: lighter;
  }

  .date {
    font-weight: bold;
    width: 50%;
    text-align: left;
  }

  .progress-container {
    width: 100%;
    margin: 5px auto;
  }

  .page-progress {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 10px;
  }
`;

function Period({ startFrom, end, status, page, totalPage }) {
  return (
    <StyledPeriod>
      <p className="date">
        시작일: <span>{startFrom || '-'}</span>
      </p>
      <p className="date">
        종료일: <span>{end || '-'}</span>
      </p>
      {status === 1 && (
        <div className="progress-container">
          <ProgressBar value={page} totalValue={totalPage} height="7px" />
          <div className="page-progress">
            <p>
              {page} / {totalPage} 페이지
            </p>
            <p>{Math.round((page / totalPage) * 100)}%</p>
          </div>
        </div>
      )}
    </StyledPeriod>
  );
}

export default Period;
