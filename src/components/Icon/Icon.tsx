import React from "react";
import { Pressable } from "react-native";

import { useAppTheme } from "@hooks";
import { ThemeColors } from "@theme";

import {
  ArrowLeftIcon,
  CheckIcon,
  CloseIcon,
  EyeOffIcon,
  EyeOnIcon,
  HouseFillIcon,
  HouseIcon,
  OptionsFillIcon,
  OptionsIcon,
  PhoneAddFillIcon,
  PhoneAddIcon,
  ReceiptFillIcon,
  ReceiptIcon,
  SignInIcon,
  UserFillIcon,
  UserIcon,
  DeviceMobileCameraIcon,
  CaretDownIcon,
  HeadsetIcon,
  PhoneIcon,
  QuestionIcon,
  SwapIcon,
  UserCircleIcon,
  WrenchIcon,
  BellRingingIcon,
  InfoIcon,
  LockIcon,
  MapPinIcon,
  PencilSimpleIcon,
  PhoneIncomingIcon,
  SignOutIcon,
  StorefrontIcon,
  TrashIcon,
  CaretUpIcon,
  PlusIcon,
  MinusIcon,
  CopySimpleIcon,
  CheckCircleIcon,
  GearIcon,
  ProhibitIcon,
  LockOpenIcon,
  DotGroupIcon,
  ClockIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ChatFillIcon,
  PaperPlaneFillIcon,
} from "../../assets/icons";

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = "backgroundContrast",
  size = 20,
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }
  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  bellRing: BellRingingIcon,
  check: CheckIcon,
  checkCircle: CheckCircleIcon,
  close: CloseIcon,
  clock: ClockIcon,
  caretDown: CaretDownIcon,
  caretUp: CaretUpIcon,
  caretLeft: CaretLeftIcon,
  caretRight: CaretRightIcon,
  chat: ChatFillIcon,
  copySimple: CopySimpleIcon,
  deviceMobileCamera: DeviceMobileCameraIcon,
  dotGroup: DotGroupIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  gear: GearIcon,
  house: HouseIcon,
  houseFill: HouseFillIcon,
  info: InfoIcon,
  lock: LockIcon,
  lockOpen: LockOpenIcon,
  mapPin: MapPinIcon,
  minus: MinusIcon,
  headset: HeadsetIcon,
  options: OptionsIcon,
  optionsFill: OptionsFillIcon,
  paperPlaneFill: PaperPlaneFillIcon,
  pencilSimple: PencilSimpleIcon,
  phone: PhoneIcon,
  phoneAdd: PhoneAddIcon,
  phoneAddFill: PhoneAddFillIcon,
  phoneIncoming: PhoneIncomingIcon,
  plus: PlusIcon,
  prohibit: ProhibitIcon,
  question: QuestionIcon,
  receipt: ReceiptIcon,
  receiptFill: ReceiptFillIcon,
  signIn: SignInIcon,
  signOut: SignOutIcon,
  storefront: StorefrontIcon,
  swap: SwapIcon,
  trash: TrashIcon,
  user: UserIcon,
  userFill: UserFillIcon,
  userCircle: UserCircleIcon,
  wrench: WrenchIcon,
};

type IconType = typeof iconRegistry;
export type IconName = keyof IconType;
