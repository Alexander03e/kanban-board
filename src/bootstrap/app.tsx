import { Header } from "../widgets/Header";
import { Page } from "../widgets/Page";
import "@/assets/styles/globals.scss";
import "@/assets/styles/root.scss";
import { Router } from "./routers/router";
import { LeftMenu } from "@/widgets/LeftMenu";
import { Container } from "@/shared/components/ui/Container";

export const App = () => {
    return (
        <Page>
            <Header />
            <Container>
                <LeftMenu />
                <Router />
            </Container>
        </Page>
    );
};
