import { LogEntry } from "../types";
import { entry1 } from "./entry-1";
import { entry2 } from "./entry-2";
import { entry3 } from "./entry-3";
import { entry4 } from "./entry-4";
import { entry5 } from "./entry-5";

// Entries are ordered chronologically (newest first)
export const LOG_ENTRIES: LogEntry[] = [entry5, entry4, entry3, entry2, entry1];
