"use client";
import { useState } from "react";
import type { Character, House } from "../api/types.api";
import { Button } from "./base/button";
import { Dialog } from "./base/dialog";
import { useGetHouseMembers } from "../api/hooks";

type HouseCardProps = {
  house: House;
};

export const HouseCard = ({ house }: HouseCardProps) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleToggleDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div
      key={house.url}
      className="p-4 border border-gray-200 rounded-lg shadow-md flex flex-col justify-between w-full h-full"
    >
      <h2 className="text-xl font-bold my-4">{house.name}</h2>
      <Button type="button" onClick={() => setShowDialog(true)}>
        view members
      </Button>
      <HouseCardDialog
        house={house}
        onToggleDialog={handleToggleDialog}
        showDialog={showDialog}
      />
    </div>
  );
};

const HouseCardDialog = ({
  house,
  onToggleDialog,
  showDialog,
}: {
  house: House;
  onToggleDialog: () => void;
  showDialog: boolean;
}) => {
  const { data, isLoading, error } = useGetHouseMembers({
    urls: house.swornMembers,
    enabled: showDialog,
    name: house.name,
  });

  return (
    <Dialog onClose={onToggleDialog} open={showDialog}>
      <div className="bg-white rounded-lg">
        <MemberCounts data={data} />
        <h2 className="text-2xl font-bold mb-4 max-w-sm">
          {house.name} Members
        </h2>
        <LoadingState isLoading={isLoading} />
        <ErrorState error={error} />
        <EmptyState isLoading={isLoading} data={data} />
        <MemberList members={data} />
      </div>
    </Dialog>
  );
};

const MemberCounts = ({ data }: { data: Character[] | undefined }) => {
  if (!data?.length) return null;

  const deadCount = data.filter((member) => member.died).length;
  const aliveCount = data.filter((member) => !member.died).length;

  return (
    <div className="flex gap-1 text-sm text-white mb-4">
      <div className="border border-red-200 rounded-full px-2 py-1 bg-red-400">
        Dead: {deadCount}
      </div>
      <div className="border border-red-200 rounded-full px-2 py-1 bg-green-400">
        Alive: {aliveCount}
      </div>
    </div>
  );
};

const LoadingState = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;
  return <span className="text-gray-500">Loading...</span>;
};

const ErrorState = ({ error }: { error: Error | null }) => {
  if (!error) return null;
  return <span className="text-red-500">Error: {error.message}</span>;
};

const EmptyState = ({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: Character[] | undefined;
}) => {
  if (isLoading || data?.length) return null;
  return (
    <span className="text-gray-500">This house has no sworn members 😔</span>
  );
};

const MemberList = ({ members }: { members: Character[] | undefined }) => {
  if (!members?.length) return null;

  return (
    <ul className="space-y-4">
      {members.map((member) => (
        <li key={member.name} className="flex items-center space-x-2">
          <span className="font-medium">
            {member.name || "missing name 🤷 "} -{" "}
          </span>
          <span className="text-sm text-gray-500">
            {member.died
              ? `Not so lucky 💀. Died ${member.died}`
              : "Still alive ✅"}
          </span>
        </li>
      ))}
    </ul>
  );
};
