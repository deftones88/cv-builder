import { VERSION_HISTORY } from "@shared/constants";

export const getCurrentVersion = () => {
  const latestVersion = VERSION_HISTORY[0];
  const { majorVersion, subVersions } = latestVersion;
  const { version: subVersion, updates } = subVersions[0];
  const { version } = updates[0];
  return `${majorVersion}.${subVersion}.${version}`;
};
