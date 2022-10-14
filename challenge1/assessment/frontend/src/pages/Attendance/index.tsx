import { Attendance } from '../../constants/types/attendance';
import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Loading from 'components/common/Loading';
import NoResult from 'components/common/NoResult';
import { ERROR } from 'utils/messages';
import moment from 'moment';
import { GET_USER_ATTENDANCE } from 'services/attendance';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#131E0E',
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: '#FAFAFC',
    border: 0,
    marginTop: '4px',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#131E0E',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    textAlign: 'right',
    position: 'relative',
    '&::before': {
      content: `attr(data-label)`,
      position: 'absolute',
      left: '0',
      width: '50%',
      paddingLeft: '15px',
      fontWeight: 'bold',
      textAlign: 'left',
    },
  },
}));

const StyledTableHeader = styled(TableHead)(({ theme }) => ({
  borderTop: '1px solid #F5F5F5',
  borderBottom: '1px solid #F5F5F5',
  [`&.${tableCellClasses.head}`]: {
    borderTop: '1px solid #F5F5F5',
    borderBottom: '1px solid #F5F5F5',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  border: '12px solid #FFFFFF',
  // marginTop: "4px",
  '&:nth-of-type(odd)': {
    //backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '& td': {
    border: '4px solid #FFFFFF',
    // marginTop: "4px",
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    marginBottom: '15px',
    // width: '100%'
  },
}));

const UserAttendance = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<Array<Attendance>>([]);
  const [selectedId, setSelectedId] = useState<number | string>(1);
  useEffect(() => {
    const getAllAttendance = async (id: number | string) => {
      try {
        setLoading(false);
        let { data }: { data: Array<Attendance> | [] } =
          await GET_USER_ATTENDANCE(id);
        setResult(data);
        setLoading(true);
      } catch (error) {
        setLoading(true);
        ERROR(error);
      }
    };

    getAllAttendance(selectedId);
  }, [selectedId]);

  function nullState(value: string | number) {
    return !value ? 'N/A' : value;
  }
  function timeNullState(value: Date) {
    return !value ? 'N/A' : moment(value).format('LLL');
  }
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    let numberRegex = new RegExp('^\\d+$');
    if (!numberRegex.test(event.target.value)) {
      ERROR('Not a number: ' + event.target.value);
      setSelectedId(selectedId);
    } else {
      setSelectedId(event.target.value);
    }
  }
  return (
    <div>
      {!loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <TextField
            fullWidth
            id='user-id'
            sx={{ margin: 2 }}
            label='Enter user ID'
            value={selectedId}
            onChange={onChange}
            variant='outlined'
          />
          <TableContainer style={{ margin: 14 }}>
            <Table
              sx={{
                display: { xs: 'unset', sm: 'table' },
              }}
              aria-label='customized table'
            >
              <StyledTableHeader>
                <TableRow>
                  <StyledTableCell align='left'>Name</StyledTableCell>
                  <StyledTableCell align='left'>CheckIn</StyledTableCell>
                  <StyledTableCell align='left'>CheckOut</StyledTableCell>
                  <StyledTableCell align='left'>
                    Total Working hours
                  </StyledTableCell>
                </TableRow>
              </StyledTableHeader>
              <TableBody
                style={{ borderTop: '1px solid #F5F5F5' }}
                sx={{ display: { xs: 'block', sm: 'contents' } }}
              >
                {result.map((row) => (
                  <StyledTableRow
                    key={row.emp_id}
                    style={{ cursor: 'pointer' }}
                  >
                    <StyledTableCell data-label={'Name'} align='left'>
                      {nullState(row.name)}
                    </StyledTableCell>
                    <StyledTableCell data-label={'CheckIn'} align='left'>
                      {timeNullState(row.checkin)}
                    </StyledTableCell>
                    <StyledTableCell data-label={'CheckOut'} align='left'>
                      {timeNullState(row.checkout)}
                    </StyledTableCell>

                    <StyledTableCell
                      data-label={'Total Working hours'}
                      align='left'
                    >
                      {nullState(row.total_hours)}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </React.Fragment>
      )}
      {loading && result.length === 0 && (
        <NoResult title={'No Attendance Logs has been Added!'} />
      )}
    </div>
  );
};

export default UserAttendance;
