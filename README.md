# Backbase Training Exercise

## Portal Frontend - Module 3: Container Development

Create complex layouts for your applications by learning how to develop containers that implement your application's UI logic, and see how Backbase CXP supports multiple templates for each device.

### Contents

 - **pf3e1**: Create your first container ([solution](cxp-fe-training-03/src/main/webapp/static/cxp-fe-training-03/containers/pf3e1-accordion))
 - **pf3e2a**: How to enable Drag and Drop for your container ([solution](cxp-fe-training-03/src/main/webapp/static/cxp-fe-training-03/containers/pf3e2a-accordion))
 - **pf3e2b**: Create an Accordion UI ([solution](cxp-fe-training-03/src/main/webapp/static/cxp-fe-training-03/containers/pf3e2b-accordion))
 - **pf3e3**: Style your container ([solution](cxp-fe-training-03/src/main/webapp/static/cxp-fe-training-03/containers/pf3e3-accordion))
 - **pf3e4**: How to render your container on the client-side ([solution](cxp-fe-training-03/src/main/webapp/static/cxp-fe-training-03/containers/pf3e4-accordion))

### Installation & Configuration

 - Copy and paste the **cxp-fe-training-03** folder in the **statics/bundles** folder of your Launchpad 0.12.x project
 - Add the bundle resource base in **portal/pom.xml**, e.g.:

```xml
<resourceBases>
    <resourceBase>${statics.dir}/bundles/cxp-fe-training-03/src/main/webapp</resourceBase>
    <resourceBase>${project.basedir}/src/main/webapp</resourceBase>
    <resourceBase>${work.dir}</resourceBase>
</resourceBases>
```
