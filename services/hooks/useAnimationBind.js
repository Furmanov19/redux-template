import { useSpring } from 'react-spring';
import { useContext } from 'react';
import { useDrag } from 'react-use-gesture';
import clamp from 'lodash/clamp';
import { PopUpAnimationContext } from '../../components/atoms/PopUp/RightSidePopUp';

export function useAnimationBind(handleClose) {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));
  const { setTopOffset } = useContext(PopUpAnimationContext);
  const userHeight = document.documentElement.clientHeight;

  return useDrag(({ last, vxvy: [, vY], movement: [, movementY], memo = y.value }) => {
    let newY = memo + movementY;
    if (newY < 0) newY /= 1 - newY * 0.004;

    if (last) {
      if (newY > userHeight / 2 || vY > 0.65) {
        set({ y: userHeight });
        handleClose();
      } else set({ y: 0 });
    } else set({ y: clamp(newY, -30, userHeight), immediate: true });

    setTopOffset(y.value);
    return memo;
  });
}
