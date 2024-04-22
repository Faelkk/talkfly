export default function IconsExpand({
  classname,
  type,
}: {
  classname: string;
  type: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={classname}
      width="24"
      fill={type === "Image" ? "White" : ""}
    >
      <path
        d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"
        stroke="currentColor"
      />
    </svg>
  );
}
