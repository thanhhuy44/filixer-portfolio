import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "../ui/button";

const DownloadCV = () => {
  const t = useTranslations();
  return (
    <Button>
      {t("Download CV")}
      <Download />
    </Button>
  );
};

export default DownloadCV;
