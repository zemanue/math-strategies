import { ShapeType } from "@/lib/types";
import { FaAppleWhole, FaHeart, FaCarSide } from "react-icons/fa6";
import type { ElementType } from 'react';

export const SHAPE_ICONS: Record<ShapeType, ElementType> = {
    apple: FaAppleWhole,
    heart: FaHeart,
    car: FaCarSide,
};

interface ShapeIconProps extends React.ComponentProps<"svg"> {
    shape: ShapeType;
}

export function ShapeIcon({ shape, ...props }: ShapeIconProps) {
    const Icon = SHAPE_ICONS[shape];
    if (!Icon) return null;
    return <Icon {...props} />;
}
