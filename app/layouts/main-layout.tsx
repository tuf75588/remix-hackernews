import * as React from 'react';
import { Header } from '~/components/header';
import Footer from '~/components/footer';
interface IMainLayoutProps {
    children: React.ReactNode;
    isNavVisible?: boolean;
    isUserVisible?: boolean;
    isFooterVisible?: boolean;
    title?: string;
}


export function MainLayout(props: IMainLayoutProps) {
    const { children, isNavVisible = true, isFooterVisible = true, title = "Hacker News" } = props;
    return (
        <div>
            <table id="hnmain" style={{
                backgroundColor: '#f6f6ef',
                border: '0px',
                borderCollapse: 'collapse',
                borderSpacing: '0px',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '0px',
                width: '85%',
            }}>
                <tbody>
                    <Header isNavVisible={!!isNavVisible} title={title!} />
                    <tr style={{ height: '10px' }}>
                        {children}
                        {isFooterVisible && <Footer />}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}