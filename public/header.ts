const transiton = {duration:3,ease:[0.76,0,0.24,1]}

 export const opacity = {
    initial: {
        opacity:0
    },
    open: {
        opacity: 1,
        transition:{duration:0.35}
    },
    closed: {
        opacity: 0,
        transition:{duration:0.35}
    }
 };


 export const height = {
    initial: {
        height:'0'
    },
    enter: {
        height: 'auto',
        transiton:transiton
    },
    exit: {
        height: '0',
        transiton:transiton
    }
}

export const translate = {
    initial: {
        y:'100%'
    },
    enter: (i:any[])=>({
        y: 0,
        opacity:1,
        transiton:{...transiton,delay:i[0]}
    }),
    exit: (i:any[])=>({
        y: '100%',
        transiton:{...transiton,delay:i[1]}
        
    })
}

export const background = {
    initial: {
        height:3
    },
    enter: {
        height: '100vh',
        transiton:transiton
    },
    exit: {
        height: 3,
        transiton:transiton
    }
}

export  const blur = {
    initial: {
        filter: "blur(0px)",
        opacity:1
    },
    open: {
        filter: "blur(4px)",
        opacity: 0.6,
        transiton:{duration:0.3}
    },
    closed: {
        filter: "blur(0px)",
        opacity: 1,
        transiton: { duration: 0.3}
    }
}