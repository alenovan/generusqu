"use client";

import { DateRangePicker } from "@/components/Input/DateRangePicker";
import ImageUpload from "@/components/Input/ImageUpload";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";

const AddNewBankAccountForm = () => {
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  return (
    <div className="p-4 flex flex-col gap-3">
      <div>
        <ImageUpload />
      </div>
      <div>
        <p className="font-semibold mb-2">Pilih Tanggal</p>
        <DateRangePicker value={date} onChange={setDate} />
      </div>
    </div>
  );
};

export default AddNewBankAccountForm;
