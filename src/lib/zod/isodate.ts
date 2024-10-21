/*
  Isodate schema

  References:
      - velite.js: https://github.com/zce/velite/blob/main/src/schemas/isodate.ts
*/

import { z } from "zod";

export const isodate = () =>
	z
		.string()
		.refine((value) => !isNaN(Date.parse(value)), "Invalid date string")
		.transform<string>((value) => new Date(value).toISOString()); // returns an ISO date value
