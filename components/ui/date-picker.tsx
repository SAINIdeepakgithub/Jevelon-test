"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { cn } from "./utils";
import { Button } from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = "Select a date",
  className,
  disabled = false,
}: DatePickerProps) {
  // Generate dates for the next 7 weekdays
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) { // Check more days to get 7 weekdays
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Only include weekdays (Monday = 1, Tuesday = 2, ..., Friday = 5)
      if (date.getDay() >= 1 && date.getDay() <= 5) {
        dates.push(date);
      }
      
      // Stop when we have 7 weekdays
      if (dates.length >= 7) {
        break;
      }
    }
    
    return dates;
  };

  const dates = generateDates();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleDateChange = (value: string) => {
    if (value === "none") {
      onDateChange?.(undefined);
    } else {
      const selectedDate = new Date(value);
      onDateChange?.(selectedDate);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <Select
        value={date ? date.toISOString() : "none"}
        onValueChange={handleDateChange}
        disabled={disabled}
      >
        <SelectTrigger className="w-full">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">No date selected</SelectItem>
          {dates.map((dateOption) => (
            <SelectItem key={dateOption.toISOString()} value={dateOption.toISOString()}>
              {formatDate(dateOption)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
} 