import {Component, Inject, OnInit} from '@angular/core';
import {CERTIFICATES} from "../../core/constants/certificates.constants";
import {CertificateInterface} from "../../core/interfaces/certificate.interface";

@Component({
  selector: 'certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  providers: [{provide: CERTIFICATES, useValue: CERTIFICATES}]
})
export class CertificatesComponent implements OnInit {

  constructor(@Inject(CERTIFICATES) public items: CertificateInterface[]) {
  }

  ngOnInit(): void {
  }

}
