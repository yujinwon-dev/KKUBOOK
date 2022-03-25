import { styled } from 'twin.macro';
import ActivityCalendar from 'react-github-calendar';
import commits from '../../data/commits';
import formatDate from '../../utils/formatDate';

const CommitContainer = styled.div`
  width: 85%;
  margin: auto;
  border: 1px solid #f2f2f2;
  border-radius: 20px;

  .container {
    width: 85%;
    margin: auto;
    padding: 0.5rem;
  }
`;

const today = new Date();
const todayDate = today.getDay();
const term = 7 * 26;
let fstDay = today.setDate(today.getDate() - term - todayDate + 1);
fstDay = formatDate(fstDay);

const commitData = [{ date: `${fstDay}`, level: 0 }];

function BookCommit() {
  for (let i = 0; i < commits.length; i += 1) {
    commitData.push({
      date: commits[i].start_time,
      level: 1,
    });
  }

  return (
    <CommitContainer>
      <div className="container">
        <ActivityCalendar
          username="null"
          data={commitData}
          labels={{
            months: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          }}
          showWeekdayLabels
          hideColorLegend
          hideTotalCount
          weekStart={1}
          style={{
            margin: 'auto',
          }}
        />
      </div>
    </CommitContainer>
  );
}
export default BookCommit;
