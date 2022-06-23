import React from 'react'
import useStyles from '../styles/styles';

const BackgroundImage = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.backgroundImage}>
                <svg
                width={1430}
                height={819}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <rect
                x={921.488}
                y={-682.55}
                width={1215.25}
                height={1262.12}
                rx={100}
                transform="rotate(66.835 921.488 -682.55)"
                fill="#D24B61"
                />
                <rect
                x={783.465}
                y={-692.416}
                width={1215.25}
                height={1215.28}
                rx={100}
                transform="rotate(60 783.465 -692.416)"
                fill="#FBF4E4"
                />
                <rect
                opacity={0.111}
                width={1097.94}
                height={967.79}
                rx={100}
                transform="matrix(.55424 .83236 -.89421 .44764 821.48 -528)"
                stroke="#D24B61"
                strokeWidth={1.444}
                />
                <rect
                opacity={0.222}
                width={1118.75}
                height={990.129}
                rx={100}
                transform="matrix(.55424 .83236 -.89421 .44764 809.949 -538)"
                stroke="#D24B61"
                strokeWidth={1.889}
                />
                <rect
                opacity={0.333}
                width={1139.56}
                height={1012.47}
                rx={100}
                transform="matrix(.55424 .83236 -.89421 .44764 798.414 -548)"
                stroke="#CE69CE"
                strokeWidth={2.333}
                />
                <rect
                opacity={0.444}
                width={1160.36}
                height={1034.81}
                rx={100}
                transform="matrix(.55424 .83236 -.89421 .44764 786.883 -558)"
                stroke="#D24B61"
                strokeWidth={2.778}
                />
                <rect
                opacity={0.556}
                width={1181.17}
                height={1057.15}
                rx={100}
                transform="matrix(.55424 .83236 -.89421 .44764 775.348 -568)"
                stroke="#D65368"
                strokeWidth={3.222}
                />
                <rect
                opacity={0.667}
                width={1201.98}
                height={1079.49}
                rx={100}
                transform="matrix(.55424 .83236 -.89421 .44764 763.816 -578)"
                stroke="#D24B61"
                strokeWidth={3.667}
                />
                <rect
                opacity={0.778}
                width={1222.79}
                height={1101.82}
                rx={100}
                transform="matrix(.55424 .83236 -.89421 .44764 752.281 -588)"
                stroke="#D24B61"
                strokeWidth={4.111}
                />
                <rect
                opacity={0.889}
                width={1243.6}
                height={1124.16}
                rx={100}
                transform="matrix(.55424 .83236 -.89421 .44764 740.75 -598)"
                stroke="#D24B61"
                strokeWidth={4.556}
                />
                <rect
                width={1264.41}
                height={1146.5}
                rx={100}
                transform="matrix(.55424 .83236 -.89421 .44764 729.215 -608)"
                stroke="#D24B61"
                strokeWidth={5}
                />
            </svg>
        </div>
    )
}



export default BackgroundImage;


