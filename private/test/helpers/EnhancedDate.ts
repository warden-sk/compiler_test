/*
 * Copyright 2023 Marek Kobida
 */

class EnhancedDate extends Date {
  addMonths(months: number, day?: number): EnhancedDate {
    const date = new EnhancedDate(this);

    date.setMonth(months < 0 ? date.getMonth() - -months : date.getMonth() + months, day ?? 1);

    return date;
  }

  date(): EnhancedDate {
    const date = new EnhancedDate(this);

    date.setHours(0, 0, 0, 0);

    return date;
  }

  getDaysInMonth(month?: number): number {
    const date = new EnhancedDate(
      this.getFullYear(),
      (month ? (month < 0 ? this.getMonth() - -month : this.getMonth() + month) : this.getMonth()) + 1,
      0
    );

    return date.getDate();
  }

  moveLeft(): EnhancedDate {
    const date = new EnhancedDate(this);

    if (date.getMonth() === 0) {
      date.setFullYear(date.getFullYear() - 1, 11);
    } else {
      return date.addMonths(-1);
    }

    return date;
  }

  moveRight(): EnhancedDate {
    const date = new EnhancedDate(this);

    if (date.getMonth() === 11) {
      date.setFullYear(date.getFullYear() + 1, 0);
    } else {
      return date.addMonths(1);
    }

    return date;
  }
}

export default EnhancedDate;
