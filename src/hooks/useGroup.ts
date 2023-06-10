import { useQueryClient } from '@tanstack/react-query';

import { Group } from '../entities/group';

interface UseGroup {
  group: Group | null;
  createGroup: () => void;
  joinGroup: () => void;
  leaveGroup: () => void;
}

export function useGroup(): UseGroup {
  const GROUP_LOCALSTORAGE_KEY = 'group-info';

  function createGroup() {
    console.log('createGroup');
  }

  function joinGroup() {
    console.log('joinGroup');
  }

  function leaveGroup() {
    console.log('leaveGroup');
  }

  return { group: null, createGroup, joinGroup, leaveGroup };
}
