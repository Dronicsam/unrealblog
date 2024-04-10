import { SVGProps } from "react";

interface VKProps {
  color: string;
  height: string;
  props?: SVGProps<SVGSVGElement>;
}

export const VK = ({ height, props, color }: VKProps) => (
  <svg
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.405 16.865C22.8611 15.7695 22.1444 14.7688 21.2825 13.9013C20.9892 13.5603 20.6453 13.2238 20.3768 12.9612L20.3393 12.9245C20.2008 12.7889 20.0864 12.6764 19.9928 12.5795C21.1713 10.9407 22.18 9.18595 23.003 7.34222L23.0362 7.26783L23.0595 7.18976C23.1676 6.82687 23.2922 6.1368 22.8515 5.51317C22.396 4.86859 21.6666 4.75234 21.1782 4.75234H18.9311C18.4627 4.73087 17.9988 4.85751 17.6058 5.11498C17.2098 5.37439 16.9069 5.75278 16.7402 6.1951C16.2563 7.34779 15.6508 8.4442 14.9347 9.46598V6.83269C14.9347 6.4923 14.9027 5.92289 14.5382 5.44229C14.1018 4.86685 13.4707 4.75234 13.0326 4.75234H9.46708C9.00771 4.74172 8.56094 4.90597 8.2176 5.21259C7.866 5.52659 7.65052 5.96521 7.61687 6.43543L7.61369 6.47997V6.52463C7.61369 7.01011 7.80606 7.36822 7.95975 7.59344C8.02856 7.69427 8.10216 7.78606 8.14865 7.84403L8.15938 7.85741C8.20895 7.91923 8.24204 7.96049 8.27525 8.00566C8.3626 8.12448 8.48824 8.30768 8.52379 8.78174V10.2547C7.9091 9.24423 7.26066 7.89957 6.77276 6.46344L6.76527 6.4414L6.75697 6.41965C6.63532 6.10103 6.4402 5.63743 6.04941 5.28266C5.59288 4.86821 5.0529 4.75234 4.56182 4.75234H2.28187C1.78506 4.75234 1.18613 4.86857 0.739237 5.33999C0.299773 5.80358 0.25 6.35907 0.25 6.65442V6.78755L0.278039 6.91769C0.909544 9.84881 2.21076 12.5937 4.07946 14.9377C4.92668 16.2737 6.07468 17.3936 7.43213 18.2075C8.81124 19.0345 10.3671 19.5219 11.9715 19.6297L12.0133 19.6325H12.0553C12.7811 19.6325 13.5378 19.5699 14.1068 19.1907C14.8744 18.6792 14.9347 17.8936 14.9347 17.5021V16.3642C15.1317 16.5234 15.3761 16.7378 15.6753 17.0259C16.037 17.3879 16.325 17.7016 16.572 17.9754L16.7038 18.122L16.7046 18.1228C16.8964 18.3364 17.0852 18.5467 17.2571 18.7195C17.4732 18.9367 17.7396 19.1761 18.0745 19.3529C18.4371 19.5444 18.8177 19.631 19.222 19.631H21.5035C21.9841 19.631 22.6735 19.5173 23.1582 18.9554C23.6864 18.343 23.6461 17.5924 23.48 17.053L23.4501 16.956L23.405 16.865ZM17.6857 16.9706C17.4289 16.6859 17.1192 16.3484 16.7278 15.9571L16.7246 15.9539C15.3685 14.6464 14.7348 14.4186 14.2868 14.4186C14.0485 14.4186 13.7848 14.4454 13.6137 14.6585C13.5329 14.7591 13.4905 14.8805 13.4667 15.007C13.4429 15.1333 13.4347 15.2816 13.4347 15.4505V17.5021C13.4347 17.7569 13.3928 17.8639 13.275 17.9425C13.118 18.0471 12.7825 18.1319 12.0637 18.1325C10.6993 18.0395 9.37641 17.6244 8.20349 16.9211C7.02817 16.2164 6.03709 15.2425 5.31187 14.0797L5.30398 14.0671L5.29464 14.0554C3.55337 11.8881 2.34003 9.34571 1.7503 6.6291C1.7535 6.49814 1.78187 6.42045 1.82784 6.37195C1.87521 6.32198 1.98999 6.25234 2.28187 6.25234H4.56182C4.81544 6.25234 4.9467 6.30751 5.04117 6.39327C5.14827 6.4905 5.24116 6.65561 5.35401 6.95042C5.91362 8.5964 6.67038 10.1357 7.387 11.2675C7.74518 11.8332 8.09769 12.3041 8.41529 12.6368C8.57383 12.803 8.72932 12.9406 8.8777 13.0385C9.02132 13.1332 9.18414 13.2079 9.35158 13.2079C9.43994 13.2079 9.54328 13.1988 9.64279 13.1547C9.74983 13.1074 9.83291 13.0284 9.89158 12.9225C9.99536 12.7353 10.0238 12.458 10.0238 12.0947V8.73099L10.0233 8.7231C9.97146 7.90476 9.72439 7.44443 9.48381 7.11718C9.43108 7.04546 9.37909 6.98068 9.33359 6.92399L9.32113 6.90846C9.27117 6.84616 9.23142 6.79582 9.19876 6.74795C9.13891 6.66024 9.11571 6.59909 9.11381 6.53356C9.12162 6.45578 9.15828 6.38361 9.21675 6.33139C9.27744 6.27719 9.35686 6.24897 9.43816 6.25234H13.0326C13.2387 6.25234 13.3081 6.30262 13.343 6.34868C13.3923 6.4137 13.4347 6.54893 13.4347 6.83269V11.3613C13.4347 11.8992 13.6827 12.2634 14.0428 12.2634C14.4572 12.2634 14.7559 12.012 15.2783 11.4896L15.287 11.4809L15.2948 11.4713C16.4656 10.0436 17.4225 8.45298 18.1347 6.74943L18.1392 6.73666C18.1928 6.58613 18.2941 6.45726 18.4278 6.3697C18.5614 6.28215 18.72 6.24072 18.8794 6.25175L18.8881 6.25234H21.1782C21.4905 6.25234 21.5933 6.33183 21.6265 6.37884C21.6618 6.42885 21.6864 6.53604 21.6264 6.74625C20.8053 8.58266 19.7899 10.3258 18.598 11.9464L18.5905 11.9578C18.4748 12.1348 18.3479 12.3306 18.3295 12.5554C18.3098 12.7968 18.4143 13.0163 18.597 13.2515C18.7302 13.4484 19.0049 13.7173 19.2836 13.9901L19.3099 14.0158C19.6021 14.3018 19.9186 14.6116 20.1727 14.9116L20.1795 14.9195L20.1869 14.9269C20.9444 15.6825 21.5743 16.556 22.052 17.5132C22.1283 17.7738 22.0816 17.907 22.0223 17.9757C21.953 18.0561 21.7976 18.131 21.5035 18.131H19.222C19.0438 18.131 18.9063 18.0959 18.7749 18.0265C18.638 17.9542 18.4972 17.8392 18.3206 17.6617C18.1784 17.5187 18.023 17.3457 17.8334 17.1348C17.7864 17.0825 17.7373 17.0277 17.6857 16.9706Z"
      fill={color}
    />
  </svg>
);
