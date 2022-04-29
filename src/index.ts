import { QinButton, QinColumn, QinLabel } from "qinpel-cps";

class AdSales extends QinColumn {
  private qinHello: QinLabel = new QinLabel("Hello, AdSales!");
  private qinPeople: QinButton = new QinButton({ label: new QinLabel("People") });

  public constructor() {
    super();
    this.qinHello.install(this);
    this.qinPeople.install(this);
    this.qinPeople.addAction((qinEvent) => {
      if (qinEvent.isMain) {
        const frame = this.qinpel.chief.newFrame("Search People", "adpeople", {
          search: "people",
        });
        frame.addWaiter((result) => {
          console.log("Res: " + result);
          frame.close();
        });
      }
    });
  }
}

new AdSales().style.putAsBody();
