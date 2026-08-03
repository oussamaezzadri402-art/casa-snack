export interface WorkingHoursStatus {
  isOpen: boolean;
  statusText: string;
  badgeColor: string;
  countdownText: string;
}

/**
 * Calculates whether the restaurant is currently open or closed
 * and provides a countdown to the next opening/closing time.
 */
export function calculateWorkingHoursStatus(
  openHour: number,
  openMin: number,
  closeHour: number,
  closeMin: number
): WorkingHoursStatus {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMin = now.getMinutes();
  const nowTotalMinutes = currentHour * 60 + currentMin;

  const openTotalMinutes = openHour * 60 + openMin;
  const closeTotalMinutes = closeHour * 60 + closeMin;

  let isOpen = false;
  let minutesUntilNextState = 0;

  // Check overnight schedule (e.g., 11:30 AM to 02:00 AM next day)
  if (closeTotalMinutes < openTotalMinutes) {
    if (nowTotalMinutes >= openTotalMinutes || nowTotalMinutes < closeTotalMinutes) {
      isOpen = true;
      if (nowTotalMinutes >= openTotalMinutes) {
        minutesUntilNextState = (1440 - nowTotalMinutes) + closeTotalMinutes;
      } else {
        minutesUntilNextState = closeTotalMinutes - nowTotalMinutes;
      }
    } else {
      isOpen = false;
      minutesUntilNextState = openTotalMinutes - nowTotalMinutes;
    }
  } else {
    // Standard same-day schedule
    if (nowTotalMinutes >= openTotalMinutes && nowTotalMinutes < closeTotalMinutes) {
      isOpen = true;
      minutesUntilNextState = closeTotalMinutes - nowTotalMinutes;
    } else {
      isOpen = false;
      if (nowTotalMinutes < openTotalMinutes) {
        minutesUntilNextState = openTotalMinutes - nowTotalMinutes;
      } else {
        minutesUntilNextState = (1440 - nowTotalMinutes) + openTotalMinutes;
      }
    }
  }

  const hours = Math.floor(minutesUntilNextState / 60);
  const mins = minutesUntilNextState % 60;

  let countdownText = "";
  if (isOpen) {
    if (hours > 0) {
      countdownText = `كيبقى ${hours} ساعة و ${mins} دقيقة على الإغلاق`;
    } else {
      countdownText = `كيبقى غير ${mins} دقيقة على الإغلاق!`;
    }
  } else {
    if (hours > 0) {
      countdownText = `كيفتح بعد ${hours} ساعة و ${mins} دقيقة`;
    } else {
      countdownText = `كيفتح بعد ${mins} دقيقة فقط!`;
    }
  }

  return {
    isOpen,
    statusText: isOpen ? "مفتوح الآن 🟢" : "مغلق حالياً 🔴",
    badgeColor: isOpen 
      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40" 
      : "bg-red-500/20 text-red-400 border-red-500/40",
    countdownText
  };
}
