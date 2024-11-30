import { ReactNode } from 'react';

interface ZibbTitleProps {
    children: ReactNode;
}

const ZibbTitle = ({children}: ZibbTitleProps) => {
    return (
        <h1 className="text-8xl text-purple-500 font-bold">Zibb Page</h1>
      );
}

export default ZibbTitle