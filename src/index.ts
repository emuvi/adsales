import { QinColumn, QinLabel } from "qinpel-cps"

class AdSales extends QinColumn {

    private qinHello: QinLabel = new QinLabel("Hello, AdSales!");

    public constructor() {
        super();
        this.qinHello.install(this);
    }

}

new AdSales().putAsBody();