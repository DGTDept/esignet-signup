import { useTranslation } from "react-i18next";

import LoadingIndicator from "~/common/LoadingIndicator";

export const AccountSetupProgress = () => {
  const { t } = useTranslation();

  return (
    <div className="container p-0 max-w-md rounded-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex flex-col items-center gap-6 p-16">
        <LoadingIndicator />
        <div>
          <h1 className="font-medium text-center text-lg">
            {t("setup_progress")}
          </h1>
          <p className="text-center text-sm text-gray-500">
            {t("setup_progress_wait")}
          </p>
        </div>
      </div>
    </div>
  );
};
