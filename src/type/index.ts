export interface BaseProps {
  propStyle?: string;
  // propAriaLabel?: string; // 모든 곳에 필수적이지 않음
  // className?: HTMLElement["className"];
  // class는 예약어이므로 사용 불가임으로 className을 사용해야하는데 실제 태그 에서는 class를 사용하고 있어 사용하는 곳에서 확장
}
