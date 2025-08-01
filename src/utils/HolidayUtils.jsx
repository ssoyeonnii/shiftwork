// GoogleAPI 공휴일 로직
export async function HolidayUtils(year, apiKey) {
  const calendarId = "ko.south_korea#holiday@group.v.calendar.google.com";

  const timeMin = `${year}-01-01T00:00:00Z`;
  const timeMax = `${year}-12-31T23:59:59Z`;

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    calendarId
  )}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;

  const response = await fetch(url);

  if (!response.ok) {
  console.error("Google API 요청 실패:", response.status, await response.text());
  return [];
}
  const data = await response.json();

  // 비공식 공휴일
  const unofficialTitles = [
    "크리스마스 이브",
    "Christmas Eve",
    "발렌타인데이",
    "화이트데이",
    "어버이날",
    "할로윈",
    "식목일",
    "스승의날",
    "제헌절",
    "섣달 그믐날",
  ];

  //****** 구글캘린더API를 통해 받아온 공휴일 이벤트 목록 중 비공식 공휴일 제외하고 return ******//
  const holidays = data.items
    .filter((event) => {
      return !unofficialTitles.some((title) =>
        event.summary.toLowerCase().includes(title.toLowerCase())
      );
    })
    .map((event) => ({
      date: event.start.date,
      title: event.summary,
    }));

  return holidays;
}
