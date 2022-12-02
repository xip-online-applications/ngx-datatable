docker run --rm -it -v /path-to/ngx-datatable:/code --entrypoint bash node:12

In the box run:

cd code
npm install
npm run build
npm run pack

Vervolgens wordt er een nieuwe tarbal gemaakt.

In github kun je releases maken en aan deze release eigen bestanden toevoegen. Ik heb de tarbal handmatig in de release geplaatst.

[kan beter maar voor het werkt]
