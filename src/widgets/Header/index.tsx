import { FC, HTMLAttributes } from "react";
import styles from "./header.module.css";
import { Container } from "../../shared/components/ui/Container";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<IProps> = ({ ...props }) => {
    return (
        <header className={styles.wrapper} {...props}>
            <Container>
                <div className={styles.innerWrapper}>
                    <h3>Header</h3>
                </div>
            </Container>
        </header>
    );
};
