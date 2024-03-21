import type { EventData } from './ApiEvents';
declare const useLogListener: () => {
    logListening: boolean;
    setLogListening: React.Dispatch<React.SetStateAction<boolean>>;
    logData?: EventData.Log | undefined;
};
declare const useLogHistory: () => {
    logHistory: EventData.Log[];
    latestLog?: EventData.Log | undefined;
};
export { useLogListener as useLogListener, useLogHistory };
