"use client";

import * as React from "react";
import { format, isAfter } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "../Button";
import { Calendar } from "./Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";

interface IDateRangePickerProps {
  className?: string;
  onChange: (date: DateRange) => void;
  value: DateRange;
}

export function DateRangePicker({
  className,
  onChange,
  value: date,
}: IDateRangePickerProps) {
  const [showStartDate, setShowStartDate] = React.useState(false);
  const [showEndDate, setShowEndDate] = React.useState(false);

  const handleDateChange = React.useCallback(
    (data: { date: Date; type: "start" | "end" }) => {
      if (data.type === "start") {
        const isStartDateAfterEndDate = date.to
          ? isAfter(data.date, date.to)
          : false;
        const newData = {
          from: data.date,
          to: isStartDateAfterEndDate ? data.date : date?.to,
        };
        onChange(newData);
        setShowStartDate(false);
        setShowEndDate(true);
      } else if (data.type === "end") {
        const newData = {
          from: date.from,
          to: data.date,
        };
        onChange(newData);
        setShowEndDate(false);
      }
    },
    [date]
  );

  return (
    <div className={cn("inline-flex gap-3", className)}>
      <Popover
        open={showStartDate}
        onOpenChange={() => {
          if (showStartDate) {
            setShowStartDate(false);
          }
        }}
      >
        <PopoverTrigger asChild>
          <Button
            id="start-date"
            variant={"outline"}
            className={cn(
              "w-[130px] items-start justify-start text-left flex-col h-auto bg-[#F5F5F5] border-[#CECECE] font-medium",
              !date && "text-muted-foreground"
            )}
            onClick={() => {
              setShowEndDate(false);
              setShowStartDate(true);
            }}
          >
            <p className="text-gray-500 text-xs">Dari</p>
            <p className="text-black text-sm">
              {date.from ? format(date.from, "LLL dd, y") : "-"}
            </p>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            defaultMonth={date?.from}
            mode="single"
            selected={date?.from}
            onSelect={(startDate) => {
              if (startDate) {
                handleDateChange({
                  date: startDate,
                  type: "start",
                });
              }
            }}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>
      <Popover
        open={showEndDate}
        onOpenChange={() => {
          if (showEndDate) {
            setShowEndDate(false);
          }
        }}
      >
        <PopoverTrigger asChild>
          <Button
            id="end-date"
            variant={"outline"}
            className={cn(
              "w-[130px] items-start justify-start text-left flex-col h-auto bg-[#F5F5F5] border-[#CECECE] font-medium",
              !date && "text-muted-foreground"
            )}
            onClick={() => {
              setShowStartDate(false);
              setShowEndDate(true);
            }}
          >
            <p className="text-gray-500 text-xs">Ke</p>
            <p className="text-black text-sm">
              {date.to ? format(date.to, "LLL dd, y") : "-"}
            </p>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            defaultMonth={date?.to}
            mode="single"
            selected={date?.to}
            disabled={
              date.from
                ? {
                    before: date.from,
                  }
                : undefined
            }
            onSelect={(endDate) => {
              if (endDate) {
                handleDateChange({
                  date: endDate,
                  type: "end",
                });
              }
            }}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
