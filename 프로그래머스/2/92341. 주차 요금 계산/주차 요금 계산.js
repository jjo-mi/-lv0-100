function solution(fees, records) {
const [baseTime, baseFee, unitTime, unitFee] = fees;
  const parkingData = {};
  const result = [];

  // 기록 데이터를 기준으로 차량번호를 키값으로 출입기록 분류하기
  for (const record of records) {
    const [time, number, status] = record.split(" ");
    if (!parkingData[number]) {
      parkingData[number] = [];
    }
    parkingData[number].push(time);
  }

  // 각 차량별 주차 요금 계산
  for (const [number, times] of Object.entries(parkingData)) {
    let totalMinutes = 0;
    let inTime = 0;

    // 입차와 출차 시간을 계산하여 주차 시간 총합 계산
    for (let i = 0; i < times.length; i += 2) {
      const inHour = parseInt(times[i].split(":")[0]);
      const inMinute = parseInt(times[i].split(":")[1]);
      const outHour = i + 1 < times.length ? parseInt(times[i + 1].split(":")[0]) : 23;
      const outMinute = i + 1 < times.length ? parseInt(times[i + 1].split(":")[1]) : 59;

      const inTotalMinutes = inHour * 60 + inMinute;
      const outTotalMinutes = outHour * 60 + outMinute;
      const parkingTime = outTotalMinutes - inTotalMinutes;

      totalMinutes += parkingTime;
      inTime = inTotalMinutes;
    }

    // 주차 요금 계산
    let fee = baseFee;
    if (totalMinutes > baseTime) {
      const additionalTime = totalMinutes - baseTime;
      fee += Math.ceil(additionalTime / unitTime) * unitFee;
    }

    result.push({ number, fee });

  }
        result.sort((a, b) => a.number.localeCompare(b.number));

  return result.map((item) => item.fee);
}

