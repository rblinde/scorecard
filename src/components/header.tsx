"use client";

import { RotateCcw, Trash, UserPlus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/alert-dialog";
import { Button } from "@/components/button";
import { useStoreDispatch } from "@/lib/store";
import { addPlayer, resetScores, resetState } from "@/lib/actions";

export function Header() {
  const dispatch = useStoreDispatch();

  return (
    <div className="flex gap-2 justify-end">
      <Button size="icon" onClick={() => dispatch(addPlayer())}>
        <UserPlus />
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size="icon">
            <RotateCcw />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="p-4 gap-2 sm:max-w-[425px]">
          <AlertDialogHeader>
            <AlertDialogTitle>Reset all scores?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex flex-col gap-2">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => dispatch(resetScores())}>
                Continue
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size="icon">
            <Trash />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="p-4 gap-2 sm:max-w-[425px]">
          <AlertDialogHeader>
            <AlertDialogTitle>Reset all players and scores?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex flex-col gap-2">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => dispatch(resetState())}>Continue</AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
