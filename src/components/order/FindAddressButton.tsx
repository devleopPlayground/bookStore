import { useEffect } from "react";
import Button from "../common/Button";

type LocationType = {
  address: string;
  addressDetail: string;
};

type FindAddressButtonProps = {
  onCompleted: (address: string) => void;
  setLocation: React.Dispatch<React.SetStateAction<LocationType>>;
};

const SCRIPT_URL =
  "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const FindAddressButton = ({
  onCompleted,
  setLocation,
}: FindAddressButtonProps) => {
  // 스크립트 코드

  // 핸들러
  const handleOpen = () => {
    new window.daum.Postcode({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      oncomplete: (data: any) => {
        setLocation({
          address: data.address,
          addressDetail: data.buildingName,
        });
      },
    }).open();
  };

  // 입력
  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Button type="button" size="medium" scheme="normal" onClick={handleOpen}>
      주소 찾기
    </Button>
  );
};

export default FindAddressButton;
