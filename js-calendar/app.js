let current_year = new Date().getFullYear();
let current_month = new Date().getMonth() + 1;

function checkLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function getFirstDayofWeek(year, month) {
  month = month < 10 ? "0" + month : month;
  return (new Date(year+"-"+month+"-01")).getDay();
}

function chageYearMonth(year, month) {
  let month_day = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (month === 2) {
    if(chageYearMonth(year)) {
      month_day[1] = 29;
    }
  }

  let first_day_of_week = getFirstDayofWeek(year, month);
  let arr_calendar = [];
  for (let i = 0; i < first_day_of_week; i++) {
    arr_calendar.push("");
  }

  for (let j = 1; j <= month_day[month-1]; j++) {
    arr_calendar.push(String(j));
  }

  let remain_day = 7 - (arr_calendar.length % 7);
  if (remain_day < 7) {
    for (let k = 0; k < remain_day; k++) {
      arr_calendar.push("");
    }
  }
  renderCalendar(arr_calendar);
}

function renderCalendar(data) {
  let h = [];
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      h.push('<tr>');
    } else if (i % 7 == 0) {
      h.push('</tr>');
      h.push('<tr>');
    }
    h.push('<td onclick="setDate(' + data[i] +');" style="cursor:pointer;">' + data[i] + '</td>');
  }
  h.push('</tr>');

  $("#tb_body").html(h.join(""));
};

function changeMonth(val) {
  if (val == undefined) {
    current_month = parseInt($("#month").val());
  } else {
    current_month = current_month + val;
    if (current_month == 0 ) {
      current_year = current_year - 1;
      current_month = 12;
    } else if (current_month == 13) {
      current_year = current_year + 1;
      current_month = 1;
    }
  }
  loadCalendar();
}

function changeYear(val) {
  current_year = parseInt($("#year").val());
  loadCalendar();
}

function loadCalendar() {
  $("#year").val(current_year);
  $("#month").val(current_month);
  chageYearMonth(current_year, current_month);
};

function setDate(day) {
  day = day < 10 ? "0" + day : day;
  current_month = current_month < 10 ? "0" + current_month : current_month;
  $("#input_date").val(current_year + "-" + current_month + "-" + day);
  $("#div_calendar").hide();
}

$("#year").val(current_year);
$("#month").val(current_month);

chageYearMonth(current_year,current_month);

$("#input_date").click(function() {
  $("#div_calendar").toggle();
});