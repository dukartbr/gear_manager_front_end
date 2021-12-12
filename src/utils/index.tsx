import { useBreakpoint } from "@chakra-ui/react";

const DESKTOP_BREAKPOINTS = ["lg", "xl", "2xl"];
const MOBILE_BREAKPOINTS = ["base", "xs", "sm"];

/**
 * Another abstraction/helper hook on top of `useBreakpoint()`
 * This refers to our "desktop sizes" list in single central location.
 *
 * @returns object
 */
export function useBreakpointHelper() {
  const currentBreakpoint = useBreakpoint();

  return {
    currentBreakpoint,
    isDesktop: DESKTOP_BREAKPOINTS.includes(currentBreakpoint),
    isMobile: MOBILE_BREAKPOINTS.includes(currentBreakpoint),
  };
}
